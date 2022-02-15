import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import Icons from "react-native-vector-icons/FontAwesome"



export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
     <Icons name="arrow-circle-left" size={30}  />
     <Icons name="cart-plus" size={30} style={styles.icons}  />
     </View>

     <View style={styles.text}>
     <Text style={styles.txt}>Best Jacket</Text>
     <View style={styles.search}>
       <TextInput placeholder='Search Jacket' style={styles.searchtxt}></TextInput>
     </View>
     </View>


    <View style={styles.Imagetext}>
      <View style={styles.img}>
      <Image style={styles.tinyimg}
        source={require('./assets/1.png')}
      />
      </View>

      <View style={styles.textstar}>
      <Text style={styles.imgtxt}>Bike Jacket</Text>
      <Icons name="star" color={"gold"} size={15} style={styles.star}  />
      <Icons name="star" color={"gold"} size={15} style={styles.star2}  />
      <Icons name="star" color={"gold"} size={15} style={styles.star3}  />
      <Icons name="star" color={"gold"} size={15} style={styles.star4}  />
      <Icons name="star" color={"grey"} size={15} style={styles.star5}  />
      <Text style={styles.amt}>$99</Text>
      </View>
      
    </View>


    <View style={styles.Imagetext}>
      <View style={styles.img}>
      <Image style={styles.tinyimg}
        source={require('./assets/2.png')}
      />
      </View>

      <View style={styles.textstar}>
      <Text style={styles.imgtxt}>Sport Jacket</Text>
      <Icons name="star" color={"gold"} size={15} style={styles.star}  />
      <Icons name="star" color={"gold"} size={15} style={styles.star2}  />
      <Icons name="star" color={"gold"} size={15} style={styles.star3}  />
      <Icons name="star" color={"grey"} size={15} style={styles.star4}  />
      <Icons name="star" color={"grey"} size={15} style={styles.star5}  />
      <Text style={styles.amt}>$80</Text>
      </View>
      
    </View>

    <View style={styles.Imagetext}>
      <View style={styles.img}>
      <Image style={styles.tinyimg}
        source={require('./assets/3.png')}
      />
      </View>

      <View style={styles.textstar}>
      <Text style={styles.imgtxt}>House Jacket</Text>
      <Icons name="star" color={"gold"} size={15} style={styles.star}  />
      <Icons name="star" color={"gold"} size={15} style={styles.star2}  />
      <Icons name="star" color={"gold"} size={15} style={styles.star3}  />
      <Icons name="star" color={"gold"} size={15} style={styles.star4}  />
      <Icons name="star" color={"gold"} size={15} style={styles.star5}  />
      <Text style={styles.amt}>$140</Text>
      </View>
      
    </View>

    <View style={styles.Imagetext}>
      <View style={styles.img}>
      <Image style={styles.tinyimg}
        source={require('./assets/4.png')}
      />
      </View>

      <View style={styles.textstar}>
      <Text style={styles.imgtxt}>Kitchen Jacket</Text>
      <Icons name="star" color={"gold"} size={15} style={styles.star}  />
      <Icons name="star" color={"gold"} size={15} style={styles.star2}  />
      <Icons name="star" color={"gold"} size={15} style={styles.star3}  />
      <Icons name="star" color={"gold"} size={15} style={styles.star4}  />
      <Icons name="star" color={"grey"} size={15} style={styles.star5}  />
      <Text style={styles.amt}>$115</Text>
      </View>
      
    </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f4f4fb"
  },

  header: {
    flexDirection: "row",
    // justifyContent: "center",
    marginTop: 20
  },

  icons: {
    marginLeft: 300,
  },

  text: {
    paddingHorizontal: 16,
    flexDirection: "column",
  },

  txt: {
    marginTop: 15,
    fontSize: 30,
    fontWeight: "bold"
  },

  search: {
    backgroundColor: "white",
    height: 40,
    borderRadius: 20,
    paddingLeft: 15,
    paddingTop: 5,
   marginTop: 5,
   
  },

  searchtxt: {
    fontSize: 15
  },

  Imagetext: {
    marginTop: 20,
    flexDirection: "row"
  },

  img: {
backgroundColor: "white",
width: 100,
borderRadius: 20,

  },

  tinyimg: {
    height: 100,
    width: 100,
  },

  textstar: {
    flexDirection: "row"
  },

  imgtxt: {
    padding: 15,
    fontSize: 20,
  },


  star: {
    marginLeft: 20,
    marginTop:42,
    position: "absolute"
  },


  star2: {
    marginLeft: 20,
    marginTop:42,
    position: "absolute",
    left: 20
  },


  star3: {
    marginLeft: 20,
    marginTop:42,
    position: "absolute",
    left: 40
  },


  star4: {
    marginLeft: 20,
    marginTop:42,
    position: "absolute",
    left: 60
  },


  star5: {
    marginLeft: 20,
    marginTop:42,
    position: "absolute",
    left: 80
  },

  amt: {
    color: "#757def",
    fontSize: 20,
    position: "absolute",
    top: 70,
    left: 15,
    fontWeight: "bold"
  }

});
