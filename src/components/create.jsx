    import "../styles/create.scss"
    import video from '../assets/create/video.png'
    import { useRef, useEffect } from "react";

//     function Create({display, displayFunction}){
//         const createDiv = useRef(null);

//         useEffect(()=>{
//             const handleClicksOutside = (event) =>{
//                 if(createDiv.current && !createDiv.current.contains(event.target)){
//                     displayFunction(!display)
//                 }
//             }

//             document.addEventListener("mousedown", handleClicksOutside);

//             return ()=>{
//                 document.removeEventListener("mousedown", handleClicksOutside)
//             }
//         })
//         return(
//             <div className="create" >
//                 <div className="top" ref={createDiv}s>
//                     <div className="header">
//                     <h4>Create new post</h4>
//                     </div>
//                     <div className="content">    
//                         <img src={video} alt="" />
//                     </div>
//                     <div className="paragraph">
//                     <p>Drag photos and videos here</p>
//                     <button>Select from computer</button>
//                     </div>


//                 </div>
//             </div>
//         )
//     }
//     export default Create;`



// import { useRef, useEffect } from "react";

function Create({display, displayFunction}) {
    const createDiv = useRef(null);

    useEffect(() => {
        const handleClicksOutside = (event) => {
            if (createDiv.current && !createDiv.current.contains(event.target)) {
                displayFunction(false); // Close the Create component when clicked outside
            }
        };

        if (display) {
            document.addEventListener("mousedown", handleClicksOutside);
        } else {
            document.removeEventListener("mousedown", handleClicksOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClicksOutside); // Clean up the event listener
        };
    }, [display, displayFunction]); // Only add/remove listener when 'display' changes

    return (
        <div className="create">
            <div className="top" ref={createDiv}>
                <div className="header">
                    <h4>Create new post</h4>
                </div>
                <div className="content">
                    <img src={video} alt="" />
                </div>
                <div className="paragraph">
                    <p>Drag photos and videos here</p>
                    <button>Select from computer</button>
                </div>
            </div>
        </div>
    );
}
export default Create;
