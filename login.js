function userType(event) {
  event.preventDefault();

  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const memberArr = [
    ['kevinkim', 'aslakdj'],
    ['sarahhoneydew', 'tmakdlf'],
    ['elliemango', 'dhktlqkf']
  ];
  const coachArr = [
    ['janepear', 'wpoeri'],
    ['jerrylee', 'zxmbak']
  ];
  const treasurerArr = [
    ['john', 'bgebui']
  ];
  const staffArr = [
    ['michaelorange', 'xrdvgbh']
  ];

  if (
    memberArr.some(
      ([user, pass]) => user === username.value && pass === password.value
    )
  ) {
    window.location.href = 'member.html';
  } else if (
    coachArr.some(
      ([user, pass]) => user === username.value && pass === password.value
    )
  ) {
    window.location.href = 'coachhomepage.html';
  } else if (
    treasurerArr.some(
      ([user, pass]) => user === username.value && pass === password.value
    )
  ) {
    window.location.href = 'treasurer.html';
  } else if (
    staffArr.some(
      ([user, pass]) => user === username.value && pass === password.value
    )
  ) {
    window.location.href = 'staffhomepage.html';
  } else {
    alert('Invalid username or password!');
  }
}
