// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
//   Button,
//   Typography,
//   Input,
//   Select,
//   Option,
// } from "@material-tailwind/react";

// const ProductConfirmationModal = ({ product, onConfirm, onCancel }) => {
//   const [flatRoom, setFlatRoom] = useState("");
//   const [street, setStreet] = useState("");
//   const [city, setCity] = useState("");

//   const handleConfirm = () => {
//     const deliveryAddress = `${flatRoom}, ${street}, ${city}`;
//     onConfirm(deliveryAddress);
//   };

//   return (
//     <Dialog open={Boolean(product)} handler={onCancel} size="lg" className="rounded-lg">
//       <DialogHeader className="text-center text-xl font-semibold text-gray-800">
//         Confirm Your Purchase
//       </DialogHeader>
//       <DialogBody divider className="p-6">
//         <div className="flex justify-center">
//         <div className=" ">
//           <img
//             src={product.ImageURL || "https://via.placeholder.com/300"}
//             alt={product.Name}
//             className="h-32 w-32 object-cover rounded-full border border-gray-300 shadow-md mb-4"
//           />
//           <Typography variant="h5" color="blue-gray" className="mb-2 text-center font-semibold">
//             {product.Name}
//           </Typography>
//           <Typography color="blue-gray" className="text-lg mb-4 text-center">
//             Price: <span className="font-bold">${product.Price.toFixed(2)}</span>
//           </Typography>
//         </div>
//         </div>
//         <div>
//           <Typography variant="small" color="gray" className="mb-3 font-medium">
//             Enter Delivery Address:
//           </Typography>

//           <div className="space-y-4 mb-4">
//             <Input
//               type="text"
//               value={flatRoom}
//               onChange={(e) => setFlatRoom(e.target.value)}
//               placeholder="Flat/Room No."
//               className="border border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//             />
//             <Input
//               type="text"
//               value={street}
//               onChange={(e) => setStreet(e.target.value)}
//               placeholder="Street"
//               className="border border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//             />
//             <Select
//               value={city}
//               onChange={(value) => setCity(value)}
//               label="City"
//               className="border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//             >
//               <Option value="Andheri">Andheri</Option>
//               <Option value="Bandra">Bandra</Option>
//               <Option value="Borivali">Borivali</Option>
//               <Option value="Juhu">Juhu</Option>
//               <Option value="Colaba">Colaba</Option>
//               <Option value="Dadar">Dadar</Option>
//               <Option value="Malad">Malad</Option>
//               <Option value="Vile Parle">Vile Parle</Option>
//               <Option value="Kurla">Kurla</Option>
//             </Select>
//           </div>
//         </div>
//       </DialogBody>
//       <DialogFooter className="flex justify-center gap-4 p-4">
//         <Button
//           variant="text"
//           color="gray"
//           onClick={onCancel}
//           className="transition-transform duration-150 hover:scale-105"
//         >
//           Cancel
//         </Button>
//         <Button
//           variant="gradient"
//           color="green"
//           onClick={handleConfirm}
//           className="transition-transform duration-150 hover:scale-105"
//         >
//           Confirm
//         </Button>
//       </DialogFooter>
//     </Dialog>
//   );
// };

// export default ProductConfirmationModal;
// import React from "react";
// import {
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
//   Typography,
//   Input,
//   Select,
//   Option,
//   Button,
// } from "@material-tailwind/react";

// export default function ProductConfirmationDialog({
//   product,
//   onConfirm,
//   onCancel,
// }) {
//   return (
//     <Dialog open={Boolean(product)} size="sm" handler={onCancel}>
//       <DialogHeader>
//         <Typography variant="h6" color="blue-gray">
//           {product.Name}
//         </Typography>
//       </DialogHeader>
//       <DialogBody className="flex flex-col items-center gap-4 max-h-[75vh] overflow-y-auto">
//         <div className="w-full">
//           <img
//             src={product.ImageURL}
//             alt={product.Name}
//             className="object-cover w-full h-[200px] rounded-md"
//           />
//         </div>

//         <Typography variant="body1" color="blue-gray">
//           {product.Description}
//         </Typography>

//         <div className="flex justify-between items-center w-full">
//           <Typography variant="body2" color="blue-gray">
//             Total Price:
//           </Typography>
//           <Typography
//             variant="body1"
//             color="blue-gray"
//             className="font-semibold"
//           >
//             ${product.Price.toFixed(2)}
//           </Typography>
//         </div>

//         <div className="w-full">
//           <Typography variant="small" className="mb-2 font-medium">
//             Flat/Room No & Building Name
//           </Typography>
//           <Input
//             type="text"
//             placeholder="e.g., 8"
//             className="focus:!border-t-gray-900"
//           />
//         </div>

//         <div className="w-full">
//           <Typography variant="small" className="mb-2 font-medium">
//             Street Name & Nearby
//           </Typography>
//           <Input
//             type="text"
//             placeholder="e.g., US 8"
//             className="focus:!border-t-gray-900"
//           />
//         </div>
//         <div className="flex flex-col lg:flex-row lg:gap-10 w-full">
//           <div className="w-full lg:w-1/2">
//             <Typography variant="small" className="mb-2 font-medium">
//               PINCODE
//             </Typography>
//             <Input
//               type="text"
//               placeholder="e.g., 400001"
//               className="focus:!border-t-gray-900 w-full"
//             />
//           </div>

//           <div className="w-full lg:w-1/2">
//             <Typography variant="small" className="mb-2 font-medium">
//               City
//             </Typography>
//             <Select
//               className="focus:!border-primary w-full"
//               placeholder="Select City"
//             >
//               <Option value="Andheri">Andheri</Option>
//               <Option value="Borivali">Borivali</Option>
//               <Option value="Colaba">Colaba</Option>
//               <Option value="Dadar">Dadar</Option>
//               <Option value="Juhu">Juhu</Option>
//               <Option value="Kurla">Kurla</Option>
//               <Option value="Malad">Malad</Option>
//               <Option value="Naigaon">Naigaon</Option>
//               <Option value="Vile Parle">Vile Parle</Option>
//             </Select>
//           </div>
//         </div>
//       </DialogBody>
//       <DialogFooter>
//         <Button variant="text" color="blue-gray" onClick={onCancel}>
//           Cancel
//         </Button>
//         <Button variant="gradient" color="blue" onClick={onConfirm}>
//           Order
//         </Button>
//       </DialogFooter>
//     </Dialog>
//   );
// }
