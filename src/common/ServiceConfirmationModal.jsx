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

// const ServiceConfirmationModal = ({ service, onConfirm, onCancel }) => {
//   const [flatRoom, setFlatRoom] = useState("");
//   const [street, setStreet] = useState("");
//   const [city, setCity] = useState("");

//   const handleConfirm = () => {
//     const bookingAddress = `${flatRoom}, ${street}, ${city}`;
//     onConfirm(bookingAddress);
//   };

//   return (
//     <Dialog open={Boolean(service)} handler={onCancel} size="sm" className="rounded-lg">
//       <DialogHeader className="text-center text-lg font-semibold text-gray-800">
//         Confirm Your Booking
//       </DialogHeader>
//       <DialogBody divider>
//         <div className="flex flex-col items-center">
//           <img
//             src={service.ImageURL || "https://via.placeholder.com/300"}
//             alt={service.Name}
//             className="h-24 w-24 object-cover rounded mb-4 border"
//           />
//           <Typography variant="h6" color="blue-gray" className="mb-1 text-center">
//             {service.Name}
//           </Typography>
//           <Typography color="blue-gray" className="text-sm mb-2 text-center">
//             Price: <span className="font-medium">${service.Price.toFixed(2)}</span>
//           </Typography>
//           <Typography color="blue-gray" className="text-sm mb-2 text-center">
//             Category: <span className="font-medium">{service.Category}</span>
//           </Typography>
//           <Typography color="blue-gray" className="text-sm mb-2 text-center">
//             Duration: <span className="font-medium">{service.Duration} hr</span>
//           </Typography>
//         </div>

//         <div className="mt-4">
//           <Typography variant="small" color="gray" className="mb-2">
//             Enter Booking Address:
//           </Typography>

//           <div className="grid grid-cols-1 gap-4 mb-4">
//             <Input
//               type="text"
//               value={flatRoom}
//               onChange={(e) => setFlatRoom(e.target.value)}
//               placeholder="Flat/Room No."
//               className="focus:border-blue-500"
//             />
//             <Input
//               type="text"
//               value={street}
//               onChange={(e) => setStreet(e.target.value)}
//               placeholder="Street"
//               className="focus:border-blue-500"
//             />
//             <Select
//               value={city}
//               onChange={(value) => setCity(value)}
//               label="City"
//               className="focus:border-blue-500"
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
//       <DialogFooter className="justify-center">
//         <Button
//           variant="text"
//           color="red"
//           onClick={onCancel}
//           className="mr-2 transition-transform duration-150 hover:scale-105"
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

// export default ServiceConfirmationModal;
