import { useNavigationState } from '@react-navigation/native';
import { SOCKET_URL } from '@service/config';
import { getOrderById } from '@service/orderService';
import { useAuthStore } from '@state/authStore';
import { FC, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { io } from 'socket.io-client';

const withLiveStatus = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
): FC<P> => {
  const withLiveStatusComponent: FC<P> = props => {
    const { currentOrder, setCurrentOrder } = useAuthStore();

    const routeName = useNavigationState(
      state => state.routes[state.index]?.name,
    );

    const fetchOrderDetails = async () => {
      const data = await getOrderById(currentOrder?._id as any);
      setCurrentOrder(data);
    };

    useEffect(() => {
      if (currentOrder) {
        const socketInstance = io(SOCKET_URL, {
          transports: ['websocket'],
          withCredentials: true,
        });
        socketInstance.emit('joinRoom', currentOrder?._id);
        socketInstance?.on('liveTrackingUpdates', updatedOrder => {
          fetchOrderDetails();
          console.log('Receiving live updates 🔴');
        });

        socketInstance.on("orderConfirmed",() => {
            fetchOrderDetails()
            console.log("ORDER CONFIRMATION LIVE UPDATES🔴")
        });

        return () => {
            socketInstance.disconnect();
        }
      }
    }, [currentOrder]);
    return (
      <View style={styles.container}>
        <WrappedComponent {...props} />

        {currentOrder && routeName === "ProductDashboard" && (
            <View>

             </View>
        )}
      </View>
    );
  };

  return withLiveStatusComponent;
};

const styles = StyleSheet.create({
  container: {},
});
