
const PortfolioItem = ({portfolioItems}) => {
  return (
    <div className='row item'>
        {
            portfolioItems.map((item) =>{
                return <div className='col-12 col-sm-6 col-lg-4 mb-4 text-center' key={item.id}>
                    <img src={item.image} alt={item.category} className="img-fluid" />
                </div>
            })
        }
    </div>
  )
}

export default PortfolioItem