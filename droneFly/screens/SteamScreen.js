import React,{ Component } from 'react'
import { 
    StyleSheet,
    View,
    Text,
    PanResponder,
    Animated,
    Easing,
    Dimensions 
} from 'react-native'

export default class SteamScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      top: 0,
      left: 0,
      topTransition: 0,
      leftTransition: 0,
    }
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => {
        return true
      },

      onPanResponderMove: (e, gestureState) => {
        const { dy, dx } = gestureState

        this.setState({
          topTransition: dy,
          leftTransition: dx,
        })
      },

      onPanResponderRelease: (e, gestureState) => {
        const { top, left } = this.state
        const { dy, dx } = gestureState

        this.setState({
          top: 0,
          left: 0,
          topTransition: 0,
          leftTransition: 0,
        })
      }
    });
  }

  render() {
    const { top, left, topTransition, leftTransition } = this.state
    const style = {
      top: top + topTransition,
      left: left + leftTransition,
    }

    return (
      <View style={styles.container}>
        <Text>y: {top + topTransition}</Text>
        <Text>x: {left + leftTransition}</Text>
        <View style={styles.outJoystick}>
          <View 
            {...this._panResponder.panHandlers}
            style={[styles.inJoystick, style]}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',    
    alignItems: 'center',
  },
  inJoystick: {
    // position: 'absolute',
    backgroundColor: '#777777',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    zIndex: 5,
  },
  outJoystick: {
    backgroundColor: '#aaaaaa',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  }
})

// var CIRCLE_SIZE = 50;

// export default class SteamScreen extends Component {

//     constructor(props) {
//         super(props);
//         this._panResponder = {};
//         this._previousLeft = 0;
//         this._previousTop = 0;
//         this._circleStyles = {};
//         this.circle = null;
//     }
  
//     componentWillMount() {
//       this._panResponder = PanResponder.create({
//         onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
//         onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
//         onPanResponderGrant: this._handlePanResponderGrant,
//         onPanResponderMove: this._handlePanResponderMove,
//         onPanResponderRelease: this._handlePanResponderEnd,
//         onPanResponderTerminate: this._handlePanResponderEnd,
//       });
//       this._previousLeft = 20;
//       this._previousTop = 84;
//       this._circleStyles = {
//         style: {
//         //   left: this._previousLeft,
//         //   top: this._previousTop,
//           backgroundColor: '#009900',
//         }
//       };
//     }
  
//     componentDidMount() {
//       this._updateNativeStyles();
//     }
  
//     render() {
//       return (
//         <View style={styles.container}>
//             <View style={styles.joystick}>
//                 <View 
//                     style={styles.circle}
//                     ref={(circle) => { this.circle = circle; }}
//                     { ...this._panResponder.panHandlers }
//                 />
//             </View>
//         </View>
//       );
//     }
  
//     _highlight = () => {
//       this._circleStyles.style.backgroundColor = '#ff00ff';
//       this._updateNativeStyles();
//     }
  
//     _unHighlight = () => {
//       this._circleStyles.style.backgroundColor = '#808080';
//       this._updateNativeStyles();
//     }
  
//     _updateNativeStyles() {
//       this.circle && this.circle.setNativeProps( this._circleStyles );
//     }
  
//     _handleStartShouldSetPanResponder() {
//       return true;
//     }
  
//     _handleMoveShouldSetPanResponder() {
//       return true;
//     }
  
//     _handlePanResponderGrant = (e, gestureState) => {
//       this._highlight();
//     }
  
//     _handlePanResponderMove = (e, gestureState) => {
//       this._circleStyles.style.left = this._previousLeft + gestureState.dx;
//       this._circleStyles.style.top = this._previousTop + gestureState.dy;
//       this._updateNativeStyles();
//     }
  
//     _handlePanResponderEnd = (e, gestureState) => {
//       this._unHighlight();
//       this._previousLeft += gestureState.dx;
//       this._previousTop += gestureState.dy;
//     }
  
//   }
  
//   var styles = StyleSheet.create({
//     circle: {
//         width: CIRCLE_SIZE,
//         height: CIRCLE_SIZE,
//         borderRadius: CIRCLE_SIZE / 2,
//         //   position: 'absolute',
//         left: 0,
//         top: 0,
//     },
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     joystick: {
//         width: 100,
//         height: 100,
//         alignItems: 'center',
//         justifyContent: 'center',
//         // marginTop: '50%',
//         // marginLeft: '50%',
//       //   paddingTop: 64,
//         backgroundColor: '#ff9933',
//         borderRadius: 50
//     },
// });

// export default class Viewport extends Component{
//     constructor(props){
//         super(props);

//         this.state = {
//             showDraggable   : true,
//             // dropZoneValues  : null,
//             pan             : new Animated.ValueXY()
//         };

//         this.panResponder = PanResponder.create({
//             onStartShouldSetPanResponder    : () => true,
//             onPanResponderMove              : Animated.event([null,{
//                 dx  : this.state.pan.x,
//                 dy  : this.state.pan.y
//             }]),
//             // onPanResponderRelease           : (e, gesture) => {
//             //     if(this.isDropZone(gesture)){
//             //         this.setState({
//             //             showDraggable : false
//             //         });
//             //     }else{
//             //         Animated.spring(
//             //             this.state.pan,
//             //             {toValue:{x:0,y:0}}
//             //         ).start();
//             //     }
//             // }
//         });
//     }

//     // isDropZone(gesture){
//     //     var dz = this.state.dropZoneValues;
//     //     return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
//     // }

//     // setDropZoneValues(event){
//     //     this.setState({
//     //         dropZoneValues : event.nativeEvent.layout
//     //     });
//     // }

//     render(){
//         return (
//             <View style={styles.mainContainer}>
//                 {/* <View 
//                     onLayout={this.setDropZoneValues.bind(this)}
//                     style={styles.dropZone}>
//                     <Text style={styles.text}>Drop me here!</Text>
//                 </View> */}

//                 {this.renderDraggable()}
//             </View>
//         );
//     }

//     renderDraggable(){
//         if(this.state.showDraggable){
//             return (
//                 <View style={styles.draggableContainer}>
//                     <Animated.View 
//                         {...this.panResponder.panHandlers}
//                         style={[this.state.pan.getLayout(), styles.circle]}>
//                         <Text style={styles.text}>Drag me!</Text>
//                     </Animated.View>
//                 </View>
//             );
//         }
//     }
// }

// let CIRCLE_RADIUS = 36;
// let Window = Dimensions.get('window');
// let styles = StyleSheet.create({
//     mainContainer: {
//         flex    : 1
//     },
//     dropZone    : {
//         height  : 100,
//         backgroundColor:'#2c3e50'
//     },
//     text        : {
//         marginTop   : 25,
//         marginLeft  : 5,
//         marginRight : 5,
//         textAlign   : 'center',
//         color       : '#fff'
//     },
//     draggableContainer: {
//         position    : 'absolute',
//         top         : Window.height/2 - CIRCLE_RADIUS,
//         left        : Window.width/2 - CIRCLE_RADIUS,
//     },
//     circle      : {
//         backgroundColor     : '#1abc9c',
//         width               : CIRCLE_RADIUS*2,
//         height              : CIRCLE_RADIUS*2,
//         borderRadius        : CIRCLE_RADIUS
//     }
// });