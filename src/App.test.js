import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component' , () => {

    test('renders the navbar content' ,  () => {
      render(<App/>)
      const initialText = screen.getByText('newsonline' , {exact : false})
      expect(initialText).toBeInTheDocument()
  })   

  test('renders the news platform latst post' , () => {
    render(<App/>);
    const newsHeader = screen.getByText('Latest News' , {exact : false});
    expect(newsHeader).toBeInTheDocument();
  })

})


