import * as React from 'react'
import {View, Text, Button} from 'react-native';

function HomeScreen({navigation}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>新闻首页</Text>
            <Button
                title='跳转到文章'
                onPress={() => navigation.navigate('Article')}/>
        </View>
    )
}

export default HomeScreen
