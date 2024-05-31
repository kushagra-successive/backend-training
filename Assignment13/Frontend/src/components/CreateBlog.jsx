// import { IoImageOutline } from "react-icons/io5";
// import app from "../pages/Firebase";

// import { useState } from "react";
// import {
//   getDownloadURL,
//   getStorage,
//   ref,
//   uploadBytesResumable,
// } from "firebase/storage";
// import { useNavigate } from "react-router-dom";

// const CreatePost = () => {
//   const [imgStatus, setImgStatus] = useState(-1);
//   const [status, setStatus] = useState({ response: {}, result: { msg: "" } });
//   const [postDetail, setPostDetail] = useState({
//     description: "",
//     imagePath: "",
//     title: "",
//   });
//   const navigate = useNavigate();
//   const handleFile = (file) => {
//     const storage = getStorage(app);
//     const fileName = new Date().getTime() + file.name;
//     const storageRef = ref(storage, "images/" + fileName);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         const progress =
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         setImgStatus(progress);
//         console.log("Upload is " + progress + "% done");
//       },
//       (error) => {
//         setImgStatus(error.message);
//       },
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           console.log("File available at", downloadURL);
//           setPostDetail((prevPostDetail) => ({
//             ...prevPostDetail,
//             imagePath: downloadURL,
//           }));
//         });
//       }
//     );
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "imagePath" && files.length > 0) {
//       handleFile(files[0]);
//     } else if (name === "description" && value.length > 200) {
//       //in case when someone copy and paste content in desription box
//       setPostDetail((prevPostDetail) => ({
//         ...prevPostDetail,
//         description: value.slice(0, 200),
//       }));
//     } else {
//       setPostDetail((prevPostDetail) => ({
//         ...prevPostDetail,
//         [name]: value,
//       }));
//     }
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { _id, name } = JSON.parse(localStorage.getItem("user"));
//       const requestBody = {
//         ...postDetail,
//         author: { id: _id, name: name },
//       };
//       const response = await fetch("/api/v1/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(requestBody),
//       });
//       if (!response.ok) {
//         const result = await response.json();
//         console.log(result);
//         setStatus({ response, result });
//         throw new Error("Network response was not ok");
//       }
//       setImgStatus(-1);
//       const result = await response.json();
//       setStatus({ response, result });
//       setPostDetail({ description: "", imagePath: "", title: "" });
//       console.log(result);
//       setTimeout(() => {
//         navigate("/");
//       }, 1000);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const UploadProgress = () => {
//     return (
//       imgStatus < 100 &&
//       imgStatus !== -1 && (
//         <div className="flex justify-center items-center">
//           <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
//         </div>
//       )
//     );
//   };

//   return (
//     <>
//       <div className="py-8 text-center text-3xl font-bold text-gray-700">
//         <h1>Create Your Own Blogs and Post it...</h1>
//       </div>

//       <div
//         className={`max-w-md mx-auto rounded-lg shadow-lg ${
//           status.response.ok
//             ? "shadow-lime-400 border-2"
//             : "shadow-lime-800 border-2"
//         } border-gray-900/20 p-8`}
//       >
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4 relative">
//             <label className="block text-gratestamenty-700 font-bold mb-3">
//               Image :
//             </label>
//             <label
//               htmlFor="image"
//               className="w-full border border-gray-400 p-3 rounded-md cursor-pointer flex items-center justify-center"
//             >
//               <IoImageOutline className="w-8 h-8 text-gray-600 mr-3 " />
//               {imgStatus !== -1
//                 ? imgStatus === 100
//                   ? `Loaded Successfully 🖼️`
//                   : `Uploading is ${imgStatus}% done`
//                 : "Upload Image"}
//             </label>

//             <input
//               type="file"
//               id="image"
//               name="imagePath"
//               className="hidden"
//               accept="image/*"
//               onChange={handleChange}
//             />
//           </div>
//           {UploadProgress}
//           <br />
//           <div>
//             <label className="block text-gray-700 font-bold mb-1">
//               Title :
//             </label>
//             <textarea
//               id="title"
//               name="title"
//               className="w-full border border-gray-400 p-2 rounded-md"
//               rows="2"
//               onChange={handleChange}
//               value={postDetail.title}
//             ></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2">
//               Description :
//             </label>
//             <textarea
//               id="description"
//               name="description"
//               className="w-full border border-gray-400 p-2 rounded-md"
//               rows="4"
//               onChange={handleChange}
//               disabled={postDetail.description.length >= 200}
//               value={postDetail.description}
//             ></textarea>
//             {postDetail.description.length > 0
//               ? postDetail.description.length > 200
//                 ? "Maximum Limit Exceed"
//                 : `${postDetail.description.length}/200`
//               : ""}
//           </div>
//           <button
//             type="submit"
//             className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
//           >
//             {status.response.ok ? "Post Added ✅" : "Add Post"}
//           </button>
//         </form>
//         <div className="text-red-700 text-sm mt-5">
//           {!status.response.ok && status.result.message}
//         </div>
//       </div>
//     </>
//   );
// };

// export default CreatePost;
import { IoImageOutline } from "react-icons/io5";
import app from "../pages/Firebase";

import { useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [imgStatus, setImgStatus] = useState(-1);
  const [status, setStatus] = useState({ response: {}, result: { msg: "" } });
  const [postDetail, setPostDetail] = useState({
    description: "",
    imagePath: "",
    title: "",
  });
  const navigate = useNavigate();
  const handleFile = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, "images/" + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImgStatus(progress);
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        setImgStatus(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setPostDetail((prevPostDetail) => ({
            ...prevPostDetail,
            imagePath: downloadURL,
          }));
        });
      }
    );
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imagePath" && files.length > 0) {
      handleFile(files[0]);
    } else if (name === "description" && value.length > 200) {
      //in case when someone copy and paste content in desription box
      setPostDetail((prevPostDetail) => ({
        ...prevPostDetail,
        description: value.slice(0, 200),
      }));
    } else {
      setPostDetail((prevPostDetail) => ({
        ...prevPostDetail,
        [name]: value,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { _id, name } = JSON.parse(localStorage.getItem("user"));
      const requestBody = {
        ...postDetail,
        author: { id: _id, name: name },
      };
      const response = await fetch("/api/v1/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });
      if (!response.ok) {
        const result = await response.json();
        console.log(result);
        setStatus({ response, result });
        throw new Error("Network response was not ok");
      }
      setImgStatus(-1);
      const result = await response.json();
      setStatus({ response, result });
      setPostDetail({ description: "", imagePath: "", title: "" });
        navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const UploadProgress = () => {
    return (
      imgStatus < 100 &&
      imgStatus !== -1 && (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )
    );
  };

  return (
    <>
      <div className="py-8 text-center text-3xl font-bold text-gray-700">
        <h1>Create Your Own Blogs and Post it...</h1>
      </div>

      <div
        className={`max-w-md mx-auto rounded-lg shadow-lg ${
          status.response.ok
            ? "shadow-lime-400 border-2"
            : "shadow-lime-800 border-2"
        } border-gray-900/20 p-8`}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <label className="block text-gratestamenty-700 font-bold mb-3">
              Image :
            </label>
            <label
              htmlFor="image"
              className="w-full border border-gray-400 p-3 rounded-md cursor-pointer flex items-center justify-center"
            >
              <IoImageOutline className="w-8 h-8 text-gray-600 mr-3 " />
              {imgStatus !== -1
                ? imgStatus === 100
                  ? `Loaded Successfully 🖼️`
                  : `Uploading is ${imgStatus}% done`
                : "Upload Image"}
            </label>

            <input
              type="file"
              id="image"
              name="imagePath"
              className="hidden"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
          {UploadProgress}
          <br />
          <div>
            <label className="block text-gray-700 font-bold mb-1">
              Title :
            </label>
            <textarea
              id="title"
              name="title"
              className="w-full border border-gray-400 p-2 rounded-md"
              rows="2"
              onChange={handleChange}
              value={postDetail.title}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Description :
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full border border-gray-400 p-2 rounded-md"
              rows="4"
              onChange={handleChange}
              disabled={postDetail.description.length >= 200}
              value={postDetail.description}
            ></textarea>
            {postDetail.description.length > 0
              ? postDetail.description.length > 200
                ? "Maximum Limit Exceed"
                : `${postDetail.description.length}/200`
              : ""}
          </div>
          <button
            type="submit"
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            {status.response.ok ? "Post Added ✅" : "Add Post"}
          </button>
        </form>
        <div className="text-red-700 text-sm mt-5">
          {!status.response.ok && status.result.message}
        </div>
      </div>
    </>
  );
};

export default CreatePost;
