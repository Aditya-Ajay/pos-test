// import {
//   BellRingIcon,
//   ChevronDownIcon,
//   MailIcon,
//   SearchIcon,
//   SettingsIcon,
// } from "lucide-react";
// import React, { useState } from "react";
// import { Button } from "../components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "../components/ui/dropdown-menu";
// import { Input } from "../components/ui/input";
// // import { Separator } from "../components/ui/Separator";

// export const RepairFormSection = () => {
//   const [isProfileOpen, setIsProfileOpen] = useState(false);

//   return (
//     <header className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] bg-white">
//       {/* Logo Section */}
//       <div className="flex flex-col w-[280px] h-20 items-start justify-center p-6 bg-white">
//         <img
//           className="w-[173px] h-12 object-cover"
//           alt="Solis POS Logo"
//           src="public/frame-614-1.png"
//         />
//       </div>

//       {/* Navigation and User Controls */}
//       <div className="flex h-20 items-center justify-between px-6 py-5 flex-1 bg-white border-l border-[#eeeeef]">
//         {/* Search Bar */}
//         <div className="flex items-center gap-4 px-4 py-2.5 bg-white rounded border border-[#eeeeef] w-[340px]">
//           <SearchIcon className="w-5 h-5 text-foundation-greygrey-600" />
//           <Input
//             className="border-0 p-0 h-auto shadow-none focus-visible:ring-0 text-foundation-greygrey-600 font-inter-14px-medium placeholder:text-foundation-greygrey-600"
//             placeholder="Search"
//             type="text"
//           />
//         </div>

//         {/* Right Side Controls */}
//         <div className="flex items-center gap-5">
//           {/* Store Selector */}
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button
//                 variant="outline"
//                 className="flex items-center justify-between w-[191px] h-10 px-4 py-2.5 bg-white rounded border border-[#eeeeef] font-inter-14px-medium text-foundation-greygrey-600 hover:bg-white"
//               >
//                 <span>Store: J Galleria</span>
//                 <ChevronDownIcon className="w-5 h-5" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuItem>Store: J Galleria</DropdownMenuItem>
//               <DropdownMenuItem>Store: Downtown</DropdownMenuItem>
//               <DropdownMenuItem>Store: Westside</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>

//           {/* Utility Icons */}
//           <div className="flex items-center gap-2.5">
//             <Button
//               variant="outline"
//               size="icon"
//               className="p-2.5 bg-white rounded border border-[#eeeeef] hover:bg-white"
//             >
//               <SettingsIcon className="w-5 h-5 text-foundation-greygrey-600" />
//             </Button>

//             <Button
//               variant="outline"
//               size="icon"
//               className="p-2.5 bg-white rounded border border-[#eeeeef] hover:bg-white"
//             >
//               <BellRingIcon className="w-5 h-5 text-foundation-greygrey-600" />
//             </Button>

//             <Button
//               variant="outline"
//               size="icon"
//               className="p-2.5 bg-white rounded border border-[#eeeeef] hover:bg-white"
//             >
//               <MailIcon className="w-5 h-5 text-foundation-greygrey-600" />
//             </Button>
//           </div>

//           {/* User Profile */}
//           <div className="relative">
//             <DropdownMenu open={isProfileOpen} onOpenChange={setIsProfileOpen}>
//               <DropdownMenuTrigger asChild>
//                 <Button
//                   variant="outline"
//                   className="flex items-center justify-between w-[190px] h-10 px-4 py-2.5 bg-white rounded border border-[#eeeeef] hover:bg-white"
//                 >
//                   <div className="flex items-center gap-4">
//                     <img
//                       className="w-[26px] h-[26px] object-cover rounded-full"
//                       alt="User avatar"
//                       src="public/image-1.png"
//                     />
//                     <span className="font-inter-14px-medium text-foundation-greygrey-600">
//                       John Smith
//                     </span>
//                   </div>
//                   <ChevronDownIcon className="w-5 h-5" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-[190px] p-0">
//                 <DropdownMenuItem className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer">
//                   <span className="font-inter-14px-medium text-foundation-greygrey-600">
//                     My Profile
//                   </span>
//                 </DropdownMenuItem>
//                 <Separator className="my-0" />
//                 <DropdownMenuItem className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer">
//                   <span className="font-inter-14px-medium text-foundation-greygrey-600">
//                     Add Users
//                   </span>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };