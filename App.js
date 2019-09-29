import React from 'react';
import { StyleSheet, Text, Button, Image, View, Dimensions, Alert } from 'react-native';

export default function App() {
    return (
        <View style={ styles.container }>
            <Image
                style={ styles.image }
                source={{uri: 'https://cdn.shortpixel.ai/client/q_lossy,ret_img/https://www.svitkvitiv.kiev.ua/wp-content/themes/storefront/img/flow.png'}}
            />
            <Button
                title="В корзину"
                color="#000"
                onPress={() => Alert.alert('Корзина', 'Добавлено')}
            />
        </View>
    );
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
        image: {
        width: win.width,
        height: 200,
    }
});
