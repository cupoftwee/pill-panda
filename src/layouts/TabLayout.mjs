import { html } from 'https://unpkg.com/htm/preact/standalone.mjs';

const AppLayout = props => html`
  <div class="panel">
    <div class="panel-body">
      ${props.children}
    </div>

    <div class="panel-footer">
      <ul class="tab">
        <li class="tab-item active">
          <a href="#">Home</a>
        </li>

        <li class="tab-item tab-action">
          <div class="input-group input-inline">
            <input class="form-input input-sm" type="text" />
            <button class="btn btn-primary btn-sm input-group-btn">Journal</button>
          </div>
        </li>

        <li class="tab-item">
          <a href="#">Settings</a>
        </li>
      </ul>

    </div>
  </div>
`

export default AppLayout