
import { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity ,Modal,modalVisible,Pressable, Alert,ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Home from './pages/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  const [show, setshow] = useState(false);
  const [item, setitem] = useState([]);
  const [onlyimage, setonlyimage] = useState([{
    id: 1,
    imageUrl: require('./assets/1.png'),
  }, ]);
  const [changecolor, setchangecolor] = useState([{
    id: 1,
    color: '#409F55'
  }, ]);


  var imagedata = [
    {
      id: 1,
      imageUrl: require('./assets/1.png'),
    },
     {
       id: 2,
       imageUrl: require('./assets/2.png'),
    },
     {
       id: 3,
      imageUrl: require('./assets/3.png'),
    },
     {
       id: 4,
       imageUrl: require('./assets/4.png'),
    },
      {
        id: 5,
        imageUrl: require('./assets/5.png'),
    },
       {
         id: 6,
         imageUrl: require('./assets/6.png'),
    },
        {
          id: 7,
          imageUrl: require('./assets/7.png'),
        },
  ]

  var colorarray = [{
      id: 1,
      color: '#409F55'
    },
    {
      id: 2,
     color: '#26292D',
    },
     {
       id: 3,
       color: '#4A309E',
    },
      {
        id: 4,
        color: '#B12258',
    },
       {
         id: 5,
         color: 'white',
    },
     {
         id: 6,
         color: '#52BCF8',
    },
       {
         id: 7,
         color: '#FF903A',
       },
  ]


  const handlechange = (id) => {
    let datas = imagedata.filter(i => i.id === id)
    setonlyimage(datas);
    let thing = colorarray.filter(i => i.id === id);
    setchangecolor(thing)
  }
  
  const handlenext = () => {
   window.location.href = './pages/home.js'
  }
  
  const handleclick = () => {
   setshow(!show)
  }
  return (
    <ScrollView>
      <View style={styles.boxone}>
        <TouchableOpacity onPress={
        () => Alert.alert("Hello")
        } 
          style = {
            {
              position: 'absolute',
              top: 40,
              left: 20,
              elevation: 10
            }
          }
        >
           <View View style = {
             {
               width: 40,
               height: 30,
               backgroundColor: 'white',
               borderRadius: 10,
             }
           } >
          <AntDesign name="arrowleft" style={{fontSize:20,textAlign:'center',paddingTop:5}} />
        </View>
       </TouchableOpacity>
         {
          onlyimage.map(i => {
            return (
            <Image  style={
              styles.controller
            }
              source={
               i.imageUrl
              } >
          </Image>
          )})
      }
      </View>
      <View style={{marginLeft:20,marginTop:10}}>
        <Text style={{ fontSize: 22, fontWeight: '400', marginTop: 10, fontWeight: "500",color: 'black' }}>Playstation Controller</Text>
        <View style={{flexDirection:"row",marginTop:10}}>
          {
            [1, 2, 3, 4, 5].map( (i,index) => < AntDesign name = "star"
                style = {
                  {
                    color: '#FFC65A',
                    fontSize: 20,
                    marginRight:5
                  }
                }
                />)
        }      
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
          <View>
            <Text style={{fontSize:14}}>(25 reviews)</Text>
          </View>
          <View>
          <Text style={{color: 'black',fontSize:21,fontWeight:"bold",paddingRight:20}}>$59,96</Text>
           </View>
        </View>
      </View>
       <View>
        <Text style={{ fontWeight: '500', fontSize: 18, marginLeft: 20 ,marginTop:10}}>About this item</Text>
        <Text style={{padding:20}}>
          is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Text>
        
      </View>
      <View style={{flexDirection:'row'}}>
        <View style={{flex:0.3}}>
           <Text style={{fontSize:18,fontWeight:'500',marginLeft:20}}>
          Colors
        </Text>
        </View>
        <View style={{flex:0.5,flexDirection:'row',justifyContent:'space-around',marginTop:4}}>
       
          {
            colorarray.map(i => <Pressable onPress={() => handlechange(i.id
            )}>
              < FontAwesome name = "circle"
              style = {
                {
                  color: `${i.color}`,
                  fontSize: 18,
                  width: 17,
                  height: 17,
                  borderRadius:50,
                  backgroundColor:'black'
                }
              }
              />
            </Pressable>)
        }
        </View>
        <View style={{flex:0.2}}></View>
      </View>

      <View style={{
        padding: 20,
        marginTop:10
      }}>
        <TouchableOpacity onPress={()=>handleclick()}>
          {
            changecolor.map(i => {
              return (
                 <View View style = {
          {    
            backgroundColor:i.color,
            padding: 18,
            borderRadius: 10,
            elevation:10
          }
        } >
                  <Text style={{ textAlign: 'center', color: i.id === 5 ? 'black' : 'white', fontWeight: '600', fontSize: 15, textTransform:'capitalize'}}>Add to Cart</Text>
          </View>
              )
            })
       }
          </TouchableOpacity>
      </View>
      {
         show ? <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                {
          onlyimage.map(i => {
            return (
            <Image Image style = {
              {
                width: 200,
                height: 200
              }
            }
              source={
               i.imageUrl
              } >
          </Image>
          )})
      }
              {
                changecolor.map(i =>  <Pressable
                style={{
                 borderRadius: 5,
                  padding: 10,
                  elevation: 2,
                  backgroundColor: i.color,
                  elevation:10
              }}
              onPress={() => setshow(false)}>
                <Text style={{
                 color: i.id === 5 ? 'black' : 'white',
                   fontWeight: 'bold',
                   textAlign: 'center',
              }}>Buy Now!</Text>
            </Pressable>)
           }
          </View>
        </View>
      </Modal> : ''
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  boxone: {
    backgroundColor: '#D1CAFF',
    borderBottomEndRadius: 100,
    borderBottomLeftRadius: 100,
    justifyContent: "center",
     alignItems:'center',
  },
  controller: {
    width: 300,
    height: 300,
  },
   centeredView: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       marginTop: 22,
     },
     modalView: {
       margin: 20,
       backgroundColor: 'white',
       borderRadius: 5,
       padding: 35,
       alignItems: 'center',
       shadowColor: '#000',
       shadowOffset: {
         width: 0,
         height: 2,
       },
       shadowOpacity: 0.25,
       shadowRadius: 4,
       elevation: 5,
     },
     buttonOpen: {
       backgroundColor: '#F194FF',
     },
     modalText: {
       marginBottom: 15,
       textAlign: 'center',
     },
});
