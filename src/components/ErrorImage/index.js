import {ErrorContainer, Para, Head, Button, ErrorImg} from './styledComponents'

import AppTheme from '../../context/Theme'

const ErrorImage = () => (
  <AppTheme.Consumer>
    {value => {
      const {activeTheme} = value

      return (
        <ErrorContainer>
          {activeTheme === 'light' ? (
            <ErrorImg src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" />
          ) : (
            <ErrorImg src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png" />
          )}
          <Head>Oops! Something Went Wrong</Head>
          <Para>
            We are having some trouble to complete your request. Please try
            again.
          </Para>
          <Button>retry</Button>
        </ErrorContainer>
      )
    }}
  </AppTheme.Consumer>
)

export default ErrorImage
