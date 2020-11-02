import React, {Component} from 'react'
import {Card, Grid, Button} from 'semantic-ui-react'
import Layout from '../../components/Layout'
import Campaign from '../../ethereum/campaign'
import web3 from '../../ethereum/web3'
import ContributeForm from '../../components/ContributeForm'
import { Link } from '../../routes'

class CampaignShow extends Component {

    static async getInitialProps(props){
        const campaign = Campaign(props.query.address)
        const summary = await campaign.methods.getSummary().call()
        console.log(summary);
        return {
            address: props.query.address,
            minimumcontribution: summary[0],
            balance: summary[1],
            requestCount: summary[2],
            approversCount: summary[3],
            manager: summary[4],
        };
    }

    renderCards() {
        const {
            minimumcontribution,
            balance,
            requestCount,
            approversCount,
            manager,
        } = this.props;
        const items = [
            {
                header: manager,
                meta: 'Address of Manager',
                description:
                    'The manager created this campaign and can create requests to withdraw',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: minimumcontribution,
                meta: 'Minimum Contribution (wei)',
                description:
                    'Minimum value to become a approval',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: requestCount,
                meta: 'Number of Requests',
                description:
                    'A request tries to withdraw money from the contract balance',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: approversCount,
                meta: 'Number of Approvers',
                description:
                    'Number of people that contributed to the contract',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance',
                description:
                    'Amount of ether that this campaign has left',
                style: {overflowWrap: 'break-word'}
            },
        ];
        return <Card.Group items={items}/>;
    }

    render(){
        return (
            <Layout>
                <h3>Campaign Show</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCards()}
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <ContributeForm address={this.props.address}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button primary>View requests</Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        )
    }
}

export default CampaignShow;
