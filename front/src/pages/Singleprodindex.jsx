import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import { Cart } from '../components/Cart/Context'
import Loader from '../components/Loader'


function reducer(state, action) {
  switch (action.type) {
    case 'fetch_request':
      return { ...state, loading: true }
    case 'fetch_success':
      return { ...state, loading: false, singleproduct: action.payload }
    default:
      return state
  }
}

const Singleprodindex = () => {

  const { cart, setCart } = useContext(Cart)


  const [{ loading, singleproduct }, dispatch] = useReducer(reducer, {
    loading: true,
    singleproduct: {}
  })

  const id = useParams().id


  useEffect(() => {

    const getProduct = async () => {
      dispatch({ type: 'fetch_request' })
      try {
        const resp = await axios.get(`http://localhost:3002/Card/product/${id}`);
        dispatch({ type: 'fetch_success', payload: resp.data })

      } catch (error) {
        alert("ishlemir")
      }

    }
    getProduct()
  }, [id])




  return loading ? (<Loader></Loader>) : (
    <>
      <section>
        <section id='details_photo'>
          <div className="col-lg-6">
            <img className='elo' src={singleproduct.image} alt="" />
          </div>
          <div className="col-lg-6 products_details">
            <div className='cartdetails_'>{singleproduct.rate}</div>
            <p>Home Transit Travel Pro Backpack</p>
            <h2>{singleproduct.name}</h2>
            <span> ${singleproduct.price}.00</span> <br />
            <select className='details-selec-option' name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
            </select> <br />
            <button class="glow-on-hover cart_single" onClick={() => { setCart([singleproduct]) }} type="button">Add to cart</button>
            <button class="glow-on-hover cart_singles" type="button">Buy it now</button>
            <img className='detailsimg' src="https://cdn.shopify.com/s/files/1/1592/8017/files/website-icon-wiget_d7191648-b959-4125-9ce7-308d4b389425.jpg?v=1650296931" alt="" />
            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-items">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Description
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                  <div class="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-items">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Features
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                  <div class="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-items">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Specifications
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <img className='cardteails_bodyimg ' src="https://cdn.shopify.com/s/files/1/1592/8017/files/Transit-details_1950x.jpg?v=1658434604" alt="" />
        </section>
        <section id='detailscarusel'>
          <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://cdn.shopify.com/s/files/1/1592/8017/files/download_4_1950x.jpg?v=1648572162" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://cdn.shopify.com/s/files/1/1592/8017/files/download_2_1950x.jpg?v=1648572053" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://cdn.shopify.com/s/files/1/1592/8017/files/download_2_1950x.jpg?v=1648572053" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        <section id='details-tree_section'>
          <div className='d-flex'>
            <div className="col-lg-6">
              <img src="https://cdn.shopify.com/s/files/1/1592/8017/files/Transit-web1_1950x.jpg?v=1650562879" alt="" />
            </div>
            <div className="col-lg-6">
              <img src="https://cdn.shopify.com/s/files/1/1592/8017/files/Transit-web02_1950x.jpg?v=1650562950" alt="" />
            </div>
          </div>
        </section>

      </section>
    </>
  )
}

export default Singleprodindex