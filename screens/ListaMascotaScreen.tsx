import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { getDatabase, ref, onValue } from "firebase/database";
import { db } from '../config/Config';

export default function ListaMascotaScreen() {

    const [lista, setlista] = useState([])

    let listaQuemada: any = [
        {
            "id": 1,
            "nombre": "Luna",
            "especie": "Perro",
            "edad": "3 años"
        },
        {
            "id": 2,
            "nombre": "Tom",
            "especie": "Gato",
            "edad": "2 años"
        },
        {
            "id": 3,
            "nombre": "Rocky",
            "especie": "Perro",
            "edad": "4 años"
        },
        {
            "id": 4,
            "nombre": "Bella",
            "especie": "Gato",
            "edad": "1 año"
        },
        {
            "id": 5,
            "nombre": "Max",
            "especie": "Conejo",
            "edad": "2 años"
        }
    ]
    //leer
    function leer() {
        const starCountRef = ref(db, 'Mascotas/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
        //transformacion
        const listaTem : any =Object.keys(data).map((id)=>({
            id,...data[id]       }))
            // console.log(listaTem)
            setlista(listaTem)
        });
    }


    useEffect(() => {
     leer()
    }, [])



    return (
        <View>
            <FlatList
                data={lista}
                renderItem={({ item }) =>
                    <Card data={item} />
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({})