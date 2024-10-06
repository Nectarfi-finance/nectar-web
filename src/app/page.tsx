import View from "./components/View";

export default function Home() {
  return (

    <div className = "flex flex-col min-h-screen bg-gray-900 text-white" >
      
      <main className=" px-4">
        {/* <MobileView /> */}
        <View />
      </main>
    </div>
    // </main>
  );
}
