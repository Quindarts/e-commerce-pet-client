import React from 'react'
import TextField from '../TextField'
import { useForm } from 'react-hook-form'
import useDebounce from '../../hooks/useDebounce'
import { Link } from 'react-router-dom'
import formatter from '../../utils/formatterMoney'
import { Icon } from '@iconify/react'
const dataSearch = [
  {
    img: '/ricky-139-115x115.jpg',
    desc: 'If your furry friend loves beef, then wait until he gets his paws on this Lumabone Bulkster Beef Dog Toy!',
    title: 'Lumabone Bulkster Beef Flavor',
    price: 150.0,
  },
  {
    img: '/ricky-139-115x115.jpg',
    desc: 'If your furry friend loves beef, then wait until he gets his paws on this Lumabone Bulkster Beef Dog Toy!',
    title: 'Lumabone Bulkster Beef Flavor',
    price: 150.0,
  },
]
const Search = () => {
  //   const [searchResults, setSearchResults] = useState('')
  const { register, reset, watch } = useForm()
  const searchValue = watch('search', '')
  const debouncedSearchValue = useDebounce(searchValue, 500)
  //   useEffect(() => {
  //     const fetchResults = async () => {
  //       if (debouncedSearchValue === '') {
  //         setSearchResults('');
  //       } else {
  //         const results = await fetchSearchResults(debouncedSearchValue);
  //         setSearchResults(results);
  //       }
  //       reset();
  //     };

  //     fetchResults();
  //   }, [debouncedSearchValue, reset]);

  console.log(debouncedSearchValue)
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 670,
      }}
      className="mx-auto"
    >
      <div className="search mx-auto">
        <div className="search__title">What Are You Looking For?</div>
        <form
          className="search__form"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <div style={{ position: 'relative' }}>
            <div>
              <Icon
                className="search__loading"
                width={20}
                height={20}
                icon="eos-icons:loading"
              />
            </div>
            <TextField
              placeholder="Start typing..."
              id="search"
              register={register}
              type="search-type"
              color="blue"
            />
            <button
              onClick={() => reset()}
              className={`h-cb search__clear ${
                searchValue !== '' ? 'active' : ''
              }`}
            >
              <Icon icon="pajamas:close-xs" />
              <span>CLEAR</span>
            </button>
          </div>
        </form>
      </div>
      {searchValue !== '' && dataSearch ? (
        <div className="search__result" style={{ width: '100%' }}>
          {dataSearch.map((item, index) => (
            <Link key={index} className="search__result--link">
              <div className="search__result--row">
                <div className="search__result--thumb">
                  <img src={item.img} alt="" />
                </div>
                <div className="search__result--col">
                  <div className="search__result--col-title">{item.title}</div>
                  <div className="search__result--col-desc">
                    <p>{item.desc}</p>
                  </div>
                  <div className="search__result--col-price">
                    <span>{formatter(item.price)}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Search
