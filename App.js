
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button,Modal,Pressable } from 'react-native';
import ToastManager, {
  Toast
} from 'toastify-react-native'

export default function App() {
  const [count, setcount] = useState(0);
  const [data, setdata] = useState([]);
  const [newdata, setnewdata] = useState();
  const [show, setshow] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [edit, setedit] = useState('');
  const [storeid, setstoreid] = useState('');

  const handleadd = () => {
    let obj = {
      id: Math.random() * 1,
      text:count
    }
   setdata([...data,obj])
    setcount('');
  }

    const handledelete = (id) => {
      setdata(data.filter(i => i.id !== id))
        Toast.success('Successfully Deleted!')
    }
  
  const handleedit = (id) => {
    setstoreid(id);
    setModalVisible(true);
    setnewdata(data.find(i => i.id == id));
    
  }


  let countAddFunc = (getArr, id) => {
    const arrCopy = [...getArr]
    const user = arrCopy.find(u => u.id === id)
    if (user) {
      user.amount++
    }
    return arrCopy
  }

  const doubleupdate = (id) => {
    let actualElement = {
      id: id,
      text:edit,
    }
    setdata([{ id: id, ...actualElement }])
    setModalVisible(false);
    Toast.success('Successfully Updated!')
  }

  return (
    <View>
      <View style={{backgroundColor:"black",alignItems:"center",padding:20}}>
          <Text style={{fontSize:18,fontWeight:"bold",color:"white",textTransform:'uppercase'}}>Passport</Text>
      </View>
      <View style={{padding:10}}>
        <TextInput onChangeText={(e) => setcount(e)} value={count} style={{ borderWidth: 1, padding: 10 }} />
        <View style={{padding:10}}>
          <Button onPress={() => handleadd()} title='Add Text' color='black' />
          
        </View>
      </View>
      {
        data.map((i, index) => < Text key = { index } > {i.text} < Button onPress = {() => handledelete(i.id)}
          title='Delete' color='red' style={{ width: 1 }} />
           <View style={styles.centeredView}>
      
    </View>
        < Button onPress={()=>handleedit(i.id)}  title = 'Edit'color = 'green' style = {{width: 1 } }/></ Text>)}
      <StatusBar style="auto" />
      <ToastManager />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={{fontWeight:'bold',fontSize:20,textTransform:"uppercase",marginBottom:10,color:"green"}}>Edit Form</Text>
              < TextInput 
                // editable={true}
                onChangeText={(e)=>setedit(e)}
                value={newdata.text}
          style = {
            {
              borderWidth: 1,
              padding: 10,
              width: 200,
              borderRadius:10
              
            }
          }
          />
              <View style={{flexDirection:"row"}}>
                <View>
                    <Pressable
              style={[styles.buttonone, styles.buttonClose]}
              onPress={() => doubleupdate(storeid)}>
              <Text style={styles.textStyle}>Edit</Text>
              </Pressable>
               </View>
                <View>
                   <Pressable
              style={[styles.button, styles.buttonCloseone]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
               </View>
           </View>
          </View>
        </View>
      </Modal>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   centeredView: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
        marginTop: 22,
      //  backgroundColor:'red',
     },
     modalView: {
       margin: 20,
       backgroundColor: 'white',
       borderRadius: 20,
       padding: 50,
       alignItems: 'center',
       shadowColor: '#000',
       shadowOpacity: 0.25,
       shadowRadius: 4,
       elevation: 5,
     },
  button: {
       width:80,
       padding: 10,
    elevation: 2,
       marginTop: 20
     },
     buttonOpen: {
       backgroundColor: '#F194FF',
     },
     buttonCloseone: {
       backgroundColor: 'red',
     },
     textStyle: {
       color: 'white',
       fontWeight: 'bold',
       textAlign: 'center',
  },
      textStyleone: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginRight:20
      },
     modalText: {
       marginBottom: 15,
       textAlign: 'center',
  },
      buttonone: {
          width: 80,
          padding: 10,
        elevation: 2,
        marginRight: 25,
          marginTop:20
        },
        buttonOpen: {
          backgroundColor: '#F194FF',
        },
        buttonClose: {
          backgroundColor: 'green',
        },
        textStyle: {
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
        },
        textStyleone: {
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
          marginRight: 20
        },
        modalText: {
          marginBottom: 15,
          textAlign: 'center',
        },
});
