"use client";
// import { Metadata } from 'next';
import Link from "next/link";
import Modal from "@/app/ui/controls/modal"
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@radix-ui/react-toast";
// import { useAlert }  from "@/app/ui/controls/useAlert"

// export const metadata: Metadata = {
//   title: 'Customer',
// };

// export default function Page() {
//     return (
//         <p>Customer Page</p>
//     );
// }

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};


export default function Page({ searchParams }: SearchParamProps) {
  const show = searchParams?.show;
  const { toast } = useToast()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-2">

      <Link href="/dashboard/customers/?show=true">
        SUMMON THE MODAL
      </Link>

      {show && <Modal />}

      <h1 className="text-4xl mb-4">
        Toast Context with Next.js 
      </h1>
      <div className="space-x-2">
        <button
          onClick={() => {
            toast({
              
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
          }}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Show Success Alert
        </button>
        {/* <button
          onClick={() => showAlert("Error", "this is a test error alert")}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Show Error Alert
        </button>
        <button
          onClick={() => showAlert("Warning", "this is a test warning alert")}
          className="px-4 py-2 bg-orange-500 text-white rounded"
        >
          Show Info Alert
        </button> */}
      </div>
    </div> 
  );
}

// export default function Page({ searchParams }: SearchParamProps) {
//   const show = searchParams?.show;
//   const { showAlert } = useAlert();
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center py-2">

//       <Link href="/dashboard/customers/?show=true">
//         SUMMON THE MODAL
//       </Link>

//       {show && <Modal />}

//       <h1 className="text-4xl mb-4">
//         Alert Context with Next.js and Tailwind CSS
//       </h1>
//       <div className="space-x-2">
//         <button
//           onClick={() => showAlert("Success", "this is a test success alert")}
//           className="px-4 py-2 bg-green-500 text-white rounded"
//         >
//           Show Success Alert
//         </button>
//         <button
//           onClick={() => showAlert("Error", "this is a test error alert")}
//           className="px-4 py-2 bg-red-500 text-white rounded"
//         >
//           Show Error Alert
//         </button>
//         <button
//           onClick={() => showAlert("Warning", "this is a test warning alert")}
//           className="px-4 py-2 bg-orange-500 text-white rounded"
//         >
//           Show Info Alert
//         </button>
//       </div>
//     </div> 
//   );
// }