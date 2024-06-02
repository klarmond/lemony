import greek from "../img/menu/greek.jpg"
import brushetta from "../img/menu/brushetta.jpg"
import fish from "../img/menu/fish.jpg"
import pasta from "../img/menu/pasta.jpg"
import Specials from "./Specials"

const Main = () => {
  const dishes = [
    {
      name: "Greek Salad",
      desc: "The famous Greek salad of crispy lettuce, peppers, olives, peppers, and our special Chicago touch.",
      price: 12.99,
      img:greek
    },
    {
      name: "Brushetta",
      desc: "Our Bruschetta features grilled garlic bread topped with fresh tomatoes, basil, and extra virgin olive oil, delivering a burst of vibrant Italian flavors in every bite.",
      price: 7.99,
      img:brushetta
    },
    {
      name: "Grilled Fish",
      desc: "Our grilled fish is perfectly seasoned and cooked to a tender, flaky perfection, offering a light and flavorful taste of the sea.",
      price: 14.99,
      img:fish
    },
    {
      name: "Pasta",
      desc: "Our pasta is cooked al dente and tossed in a rich, flavorful sauce, combining fresh ingredients to create an authentic Italian dining experience.",
      price: 10.99,
      img:pasta
    },

  ]


  return (
    <main className='main'>
        <section className='order'>
            <h3>Order for delivery!</h3>
            <div className='order-btns'>
                <button>Lunch</button>
                <button>Mains</button>
                <button>Desserts</button>
                <button>A La Carte</button>
                <button>Specials</button>
            </div>
        </section>
        <section className='options'> 
          {dishes.map((dish) => (
            <Specials special={dish} />
            ))

          }
        </section>
    </main>
  )
}

export default Main