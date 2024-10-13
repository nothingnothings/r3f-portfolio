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
            <span
              className={
                'dot m-2' + (activePage === 'notebook' ? ' dot-active' : '')
              }
            />
            Notebook
          </button>
          <button
            className={
              'btn p-0 m-0 btn--ghost' +
              (activePage === 'about' ? ' active-button' : '')
            }
            onClick={() => switchPage('about')}
          >
            {activePage === 'about' && (
              <span
                className={
                  'dot m-2' + (activePage === 'about' ? ' dot-active' : '')
                }
              />
            )}
            About
          </button>
          <button
            className={
              'btn p-0 m-0 btn--ghost' +
              (activePage === 'skills' ? ' active-button' : '')
            }
            onClick={() => switchPage('skills')}
          >
            {activePage === 'skills' && (
              <span
                className={
                  'dot m-2' + (activePage === 'skills' ? ' dot-active' : '')
                }
              />
            )}
            Skills
          </button>
        </div>
      </div>
    </div>
  );
}
