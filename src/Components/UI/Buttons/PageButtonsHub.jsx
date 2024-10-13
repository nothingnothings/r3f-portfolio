export default function PageButtonsHub({ activePage, switchPage }) {
  const notebookPageSwitch = () => {
    switchPage('notebook');
    // reload the page after 300ms:
    setInterval(() => window.location.reload(), 1500);
  };

  return (
    <div
      className="d-flex justify-content-end pageButtonsHubWrapper interface titilium-web"
      style={{ zIndex: 100, height: '100%' }}
    >
      <div className="controls">
        <div className="section d-flex flex-column text-start">
          <button
            className={
              'btn p-0 m-0 btn--ghost' +
              (activePage === 'notebook' ? ' active-button' : '')
            }
            onClick={notebookPageSwitch}
          >
            Notebook
          </button>
          <button
            className={
              'btn p-0 m-0 btn--ghost' +
              (activePage === 'about' ? ' active-button' : '')
            }
            onClick={() => switchPage('about')}
          >
            About
          </button>
          <button
            className={
              'btn p-0 m-0 btn--ghost' +
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
