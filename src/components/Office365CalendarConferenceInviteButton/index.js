import React, { Component } from 'react';
import Button from 'ringcentral-widgets/components/Button';
import styles from 'ringcentral-widgets/components/ConferencePanel/styles.scss';
import PropTypes from 'prop-types';
import openOffice365CalendarPage from '../../lib/office365Calendar';

export default class Office365CalendarConferenceInviteButton extends Component {
  constructor(props) {
    super(props);

    this._onInvite = () => {
      const inviteText = this.props.getInviteTxt();
      if (!inviteText) {
        return;
      }
      openOffice365CalendarPage({
        inviteText,
        dialInNumber: props.dialInNumber,
        topic: 'New Conference'
      });
    };
  }

  render() {
    return (
      <Button
        className={styles.button}
        onClick={this._onInvite}
      >
        Invite with Office 365 Calendar
      </Button>
    );
  }
}

Office365CalendarConferenceInviteButton.propTypes = {
  getInviteTxt: PropTypes.func.isRequired,
  dialInNumber: PropTypes.string.isRequired,
};
