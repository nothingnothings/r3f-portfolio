export default function PageButtonsHub({ activePage, switchPage }) {
  return (
    <div className="d-flex justify-content-end pageButtonsHubWrapper interface titilium-web" style={{zIndex: 100}}>
      <div className="controls">
        <div className="section d-flex flex-column">
          <button
            className={
              'btn px-lg-4 py-lg-3 btn--ghost' +
              (activePage === 'notebook' ? ' active-button' : '')
            }
            onClick={() => window.location.reload()}
          >
            Home
          </button>
          <button
            className={
              'btn px-lg-4 py-lg-3 btn--ghost' +
              (activePage === 'about' ? ' active-button' : '')
            }
            onClick={() => switchPage('about')}
          >
            About
          </button>
          <button
            className={
              'btn px-lg-4 py-lg-3 btn--ghost' +
              (activePage === 'skills' ? ' active-button' : '')
            }
            onClick={() => switchPage('skills')}
          >
            Skills
          </button>
        </div>
      </div>
    </div>
  );
}
