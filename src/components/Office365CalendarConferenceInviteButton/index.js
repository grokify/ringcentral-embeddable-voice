import React, { Component } from 'react';
import Button from 'ringcentral-widgets/components/Button';
import styles from 'ringcentral-widgets/components/ConferencePanel/styles.scss';
import PropTypes from 'prop-types';

function openOffice365CalendarPage(calendarEvent) {
  // add office365 calendar logics here
  console.log(calendarEvent);
  window.open('https://outlook.office365.com/owa/?path=/calendar/view/WorkWeek');
}

export default class Office365CalendarConferenceInviteButton extends Component {
  constructor(props) {
    super(props);

    // add logics
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

  // add logics

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
