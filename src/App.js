import { html, Component } from 'https://unpkg.com/htm/preact/standalone.mjs'

// Components
import TabLayout from './layouts/TabLayout.mjs'
const Header = ({ name }) => html`<h1>${name}</h1>`

// Root component instance
class App extends Component {
  
  addTodo() {
    const { todos = [] } = this.state;
    this.setState({ todos: todos.concat(`Item ${todos.length}`) });
  }
  
  render({ page }, { todos = [] }) {
    return html`
     <${TabLayout}>
    
      <//>
    `;
  }
}

export default App



/*

<h1>test</h1>
<li>Time & Day</li>
  <li>Calming message</li>
  <li>Upcoming Reminders</li>
  <li></li>
<h3>Today's Todos!</h3>
<ul>
  ${todos.map(todo => html`
    <li>${todo}</li>
  `)}
</ul>

<button onClick=${() => this.addTodo()}>Add ToDo</button>

*/