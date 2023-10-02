import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components"
import { fuels, yearsOfProduction } from "@/constants"
import { HomeProps } from "@/types"
import { getCars } from "@/utils"

export default async function Home ({ searchParams }: HomeProps) {
  const cars = await getCars({
    manufacture: searchParams.manufacture || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  })
  const noData = !Array.isArray(cars) || cars.length < 1

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold capitalize">car catalogue</h1>
          <p>explore cars you might like</p>
          <div className="home__filters">
            <SearchBar />
            <div className="home__filter-container">
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
            </div>
          </div>
        </div>
        {
          !noData ? 
          (
            <section>
              <div className="home__cars-wrapper">
                {
                  cars?.map((car) => (<CarCard car={car} />))
                }
              </div>
              <ShowMore
                pageNumber={(searchParams.limit || 10) / 10}
                isNext={(searchParams.limit || 10) > cars.length}
            />
            </section>
          ) : (
            <section className="home__error-container">
              Oops, no results

              <h3 className="text-black text-xl font-bold">{cars?.message}</h3>
            </section>
          )
        }
      </div>
    </main>
  )
}