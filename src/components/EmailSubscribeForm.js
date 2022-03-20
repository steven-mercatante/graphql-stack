import React from "react";

class EmailSubscribeForm extends React.Component {
  state = {
    email: ""
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ email: e.target.value });
  }

  render() {
    return (
      <div>
        <link
          href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css"
          rel="stylesheet"
          type="text/css"
        />
        <div id="mc_embed_signup">
          <form
            action="https://stevenmercatante.us17.list-manage.com/subscribe/post?u=40787a75fabc75abcb181492f&amp;id=3119bb6a9d"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <div id="mc_embed_signup_scroll">
              <label htmlFor="mce-EMAIL">
                <span role="img" aria-label="Waving">👋</span> I'm Steven Mercatante. Learn more about GraphQL and modern
                web development by signing up for my newsletter.
              </label>
              <input
                type="email"
                value={this.state.email}
                name="EMAIL"
                className="email"
                id="mce-EMAIL"
                placeholder="email address"
                required
                onChange={this.handleChange}
              />
              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                <input
                  type="hidden"
                  value="graphqlstack.com"
                  name="REF"
                  id="mce-REF"
                  tabIndex="-2"
                />
                <input
                  type="text"
                  name="b_40787a75fabc75abcb181492f_3119bb6a9d"
                  tabIndex="-1"
                  value=""
                />
              </div>
              <div className="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button subscribe"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default EmailSubscribeForm;
