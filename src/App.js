import './App.css';
import {useState , useEffect , useCallback} from 'react'
import Card from './UI/Card';
import { Grid  } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  color : {
    primary : '#03009e'
  }
});
function App() {

  const [news , setNews] = useState([]);
  const [isLoading , setIsLoading ] = useState(false);
  const [page , setPage] = useState(1);


  const fetchNews = useCallback( async () => {
    setIsLoading(true);
    try{
      const response = await fetch(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&page=${page}&pageSize=${6}&apiKey=3bc5c7dfb90d40e38c622739b10e6de4`);
      const data = await response.json()
      console.log(data)
      setIsLoading(false);

      const neededData = data.articles.map(datum => {
        return {
          id: datum.title,
          title: datum.title,
          url : datum.url,
          content: datum.content,
        }
      })
      setNews(neededData);
    }catch(error){
      console.log(error);
    }
  } , [page])

useEffect(() =>{
  fetchNews()
}, [fetchNews])

   return (
    <ThemeProvider theme={theme}>

      <section className='container'>
          <nav className="navbar">
            <h3>NewsOnline</h3>
          </nav>
          {isLoading ? 
          <p className='center'>   N E W S  &nbsp; &nbsp;  L O A D I N G</p> 
          : 
          <main className="main">
            <p>Latest News</p>
              <Grid container spacing={4}>
                  {news.map( newsItem => 
                <Grid item xs={12} sm={6} md={4} key= {newsItem.title}>
                    <Card 
                    url ={newsItem.url} 
                    content = {newsItem.content}
                    title={newsItem.title}
                    id={newsItem.title}
                    />
                </Grid>
                  )}
              </Grid>
          </main>
          }
          {!isLoading && 
          <Stack spacing={2} className='paginate'>
            <Pagination 
            page={page}
            onChange={(e , value) => {
              setPage(value)}}
              count={100} 
              // count={Math.ceil(news.length + 1)} 
              variant="outlined" 
              shape="rounded" 
              color='primary' 
              hideNextButton={false}
              hidePrevButton={false}
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                padding: '3rem',
              }}
              />
          </Stack>
    }
      </section>
    </ThemeProvider>
  );
}

export default App;
