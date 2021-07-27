import React, { useRef, useLayoutEffect } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import "@expo/match-media"
import { useMediaQuery } from 'react-responsive'
import { TweenMax } from 'gsap'

const Logo = () => {
    const isSmallScreen = useMediaQuery({    
        query: "(max-device-height: 730px)"  
    });
    const xSmallScreen = useMediaQuery({    
        query: "(max-device-height: 645px)"  
    });
    let doggo = useRef(null)
    
    useLayoutEffect(() => {
        TweenMax.from(doggo, 0.5, {
             opacity: 0
        }).then(() => {
            TweenMax.fromTo(doggo, 1, {
                rotation: 0
            }, {
                rotateX: 20,
                delay: 1,
                repeat: -1,
                yoyo: true,
            })
        })
    }, [])

    return(
        <View style={styles.container}>
            {!isSmallScreen ?
            <Image 
            ref={el => doggo = el}
            style={{width: '10rem', height: '10rem'}}
            source={require('./logoo.svg')} /> :
            xSmallScreen ?
            <View ref={el => doggo = el} /> :
            <Text ref={el => doggo = el} style={styles.loginText}>Log in</Text> 
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },
    loginText: {
        marginTop: "10%",
        fontSize: '2rem',
        fontWeight: 'bold'
    }
})

export default Logo