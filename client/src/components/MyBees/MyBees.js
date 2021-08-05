import React, { useEffect } from 'react'
import { StyleSheet, FlatList, SafeAreaView, View, Image } from 'react-native'
const dataSource = [{src: "https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?size=338&ext=jpg"},
                    {src: "https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?size=338&ext=jpg"},
                    {src: "https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?size=338&ext=jpg"},
                    {src: "https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?size=338&ext=jpg"},
                    {src: "https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?size=338&ext=jpg"},]

const MyBees = (props) => {
    
    return (
        <SafeAreaView style={styles.gallery}>
            <FlatList
                data={dataSource}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            margin: 1
                        }}>
                        <Image
                            style={styles.imageThumbnail}
                            source={{ uri: item.src }}
                        />
                    </View>
                )}
                //Setting the number of column
                numColumns={3}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    gallery: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    imageThumbnail: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
    },
  });
export default MyBees