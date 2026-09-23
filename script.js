const eyeOpenPaths = `
  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/>
  <circle cx="12" cy="12" r="3"/>
`;

const eyeClosedPaths = `
  <path d="M3 3l18 18"/>
  <path d="M10.6 5.2A11.6 11.6 0 0 1 12 5c7 0 11 7 11 7a13.9 13.9 0 0 1-3.1 3.9M6.6 6.6C3.8 8.3 2 12 2 12s4 7 11 7c1.6 0 3-.3 4.2-.9"/>
  <path d="M9.5 9.7A3 3 0 0 0 12 15a3 3 0 0 0 2.3-1.1"/>
`;

function togglePw(inputId, btnEl){
  inputId = inputId || 'pw';
  const pw = document.getElementById(inputId);
  const isHidden = pw.type === 'password';
  pw.type = isHidden ? 'text' : 'password';

  const btn = btnEl || document.querySelector('.toggle-pw');
  const icon = btn.querySelector('svg');
  icon.innerHTML = isHidden ? eyeClosedPaths : eyeOpenPaths;
  btn.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
}

function sendCode(){
  // Placeholder: wire this up to your backend verification-code endpoint.
  alert('Verification code sent (placeholder).');
}