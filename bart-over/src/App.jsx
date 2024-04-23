import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Card from "./Card.jsx"


function App() {
  return (
    <>
    <Header/>
    <body className = "body">
    <div className="clothing-list">
        <Card
          imageUrl="src\assets\bart-over-white-tee.jpg"
          title="White heavyweight, oversized Tee"
          description="These 100% cotton tee's are both ethically and organically produced, and will serve as your best bud at the gym."
        />
        <Card
          imageUrl ="src\assets\bart-over-blk-tee.jpg"
          title="Black heavyweight, oversized Tee"
          description="These 100% cotton tee's are both ethically and organically produced, and will serve as your best bud at the gym."
        />
        <Card
        imageUrl="src/assets/bart-over-white-tee.jpg"
        title="White heavyweight, oversized Tee"
        description="These 100% cotton heavyweight & oversized tee's are both ethically and organically produced, and will serve as your best bud at the gym."
      />
        {/* Add more Card components for other products */}
      </div>
      </body>
    <Footer/>
    </>
  )
}

export default App
