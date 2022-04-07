import "./styles.css";
import React, { Component } from "react";

// import data from "./citibike-data";

import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack
} from "victory";

import { animated, useSpring, useState } from "react-spring";

function Text() {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip)
  });

  return <animated.h1 style={props}>hello</animated.h1>;
}

export default Text;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};

//   }

//   render() {
//     return (
//       <div className="App">
//         {/* <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
//           <VictoryAxis
//             tickValues={[1, 2, 3, 4]}
//             tickFormat={["Rider 1", "Rider 2", "Rider 3", "Rider 4"]}
//           />

//           <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} />

//           <VictoryStack>
//             <VictoryBar data={data} x="start_lat" y="end_lat" />
//             <VictoryBar data={data} x="start_lat" y="end_lat" />
//             <VictoryBar data={data} x="start_lat" y="end_lat" />
//             <VictoryBar data={data} x="start_lat" y="end_lat" />
//           </VictoryStack>
//         </VictoryChart> */}
//       </div>
//     );
//   }
// }

// export default App;
