import {Spinner} from "@nextui-org/spinner";
export default function Loading() {

  
  return (
    <div className="absolute inset-0 flex items-center justify-center h-screen">
      <Spinner size="xl" color="secondary" />
    </div>
  )
}