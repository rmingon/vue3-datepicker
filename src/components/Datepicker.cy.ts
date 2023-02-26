import Datepicker from './Datepicker.vue'

describe('<Datepicker  />', () => {
  it('renders', () => {
    cy.mount(Datepicker, {
      props: {
        now_button: true
      }
    })
  })
})