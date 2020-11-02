import React, {Component} from 'react'
import {Form, Button, Input, Message} from 'semantic-ui-react'
import Layout from '../../components/Layout'
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'
import {Router} from '../../routes'

class CampaignNew extends Component {
    state = {
        minimumContribution: ''
    }

    onSubmit = async (event) => {
        event.preventDefault()
        this.setState({ errorMessage: '', loading: true });

        try {
            let accounts = await web3.eth.getAccounts();
            console.log(accounts);

            await factory.methods
                .createCampaign(this.state.minimumContribution)
                .send({
                    from: accounts[0]
                });
                Router.pushRoute('/');
        } catch (error) {
            this.setState({ errorMessage: error.message });
        }
        this.setState({loading:false});
    };

    render() {

        return (
            <Layout>
                <h3>Create campaign</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Minimum contribution</label>
                        <Input
                            label="wei"
                            labelPosition='right'
                            value={this.state.minimumContribution}
                            onChange={event =>
                                this.setState({minimumContribution: event.target.value})}
                        />
                    </Form.Field>
                    <Message error header="Oops" content={this.state.errorMessage} />
                    <Button primary loading={this.state.loading}>Create</Button>
                </Form>
            </Layout>
        );
    }
}

export default CampaignNew