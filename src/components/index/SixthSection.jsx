
const numbers = [
    {id:0, number: "$210M", text:"Largest Government Project"},
    {id:1, number: "150", text:"Government Projects Completed Annually"},
    {id:2, number: "#11", text:"Top Federal Government Sector Construction Firm, Building Design + Construction, 2021"},
    {id:3, number: "#3", text:"Top Contractor, ENRMid-Atlantic, 2022"},
    {id:4, number: "#5", text:"Top Government/Public Building Contractor, ENR Mid-Atlantic, 2022"},
    {id:5, number: "#30", text:"Top Local Government Sector Construction Firm, Building Design + Construction, 2021"},
]
const SixthSection = () => {
  return (
    <div className="bg-black py-24">
      <h1 className="text-white text-center text-5xl mb-11">By the numbers</h1>
     <div className="grid grid-cols-3 w-2/3 m-auto text-center justify-start">
     {numbers.map(({id, number, text})=>
      <div key={id} className="w-2/3 m-auto self-start my-11">
        <h1 className="text-5xl text-yellow font-medium italic mb-5">{number}</h1>
        <p className="text-white font-light text-md">{text}</p>
      </div>
      )}
     </div>
    </div>
  )
}

export default SixthSection
