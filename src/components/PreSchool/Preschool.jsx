import React from "react";
import './preschool.css';


const PreSchool = () => {

    return(

<div className="school">

    <h3>Characteristics of Preschool Children</h3>
            
            <p>
            At the preschool stage, children are curious and excited about the colours, shapes, sounds, sizes and forms around them. The child’s ability to experience the world gets richer and more differentiated over the years. This early learning takes place as a part of communication with adults and peers in which language also plays a very important role. Children need to be given opportunities to investigate, explore, and develop an understanding of their immediate and wider environment – human, social and cultural. In the exploration of their environments, children are involved in observation, questioning, discussion, prediction, analysis, exploration, investigation, and experimentation. In this process they construct, modify, and develop a broad range of concepts and ideas. Children begin to handle their own feelings and emotions, learn sharing, turn taking and cooperating with peers. Children begin to tell others when they are happy or sad. They also develop their self concept.
            The present curriculum, therefore, includes the specific content and pedagogy to suit the age and developmental requirements of this stage and finds its base from the theoretical and conceptual frameworks in the form of the guiding principles. This not only provides the required flexibility in terms of age, given the diversity in policies, but also caters to the realities of multilevel; multi age classrooms and ensures a smoother transition from preschool to early primary classes leading to positive self concept and confidence, better performance and better retention rates.
            </p>

        </div>
     
        
    );
}

export default PreSchool;

// class Preschool extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         name: '',
//         email: '',
//         message: ''
//       }
//     }
//     render() {
//       return(
//         <div className="App">
//           <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
//             </div>
//             <div className="form-group">
//               <label htmlFor="exampleInputEmail1">Email address</label>
//               <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
//             </div>
//             <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
//             </div>
//             <button type="submit" className="btn btn-primary">Submit</button>
//           </form>
//         </div>
//       );
//     }
//     onNameChange(event) {
//       this.setState({name: event.target.value})
//     }
//     onEmailChange(event) {
//       this.setState({email: event.target.value})
//     }
//     onMessageChange(event) {
//       this.setState({message: event.target.value})
//     }
//     handleSubmit(event) {
//     }
//   }
//   export default Preschool;