import { Header } from 'components/Header/Header';

const styles = {
  background: {
    width: '100%',
    height: '342px',
    backgroundColor: 'var(--light-grey)',
    borderBottomLeftRadius: '160px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
};

export default function Home() {
  return (
    <div>
      <Header />
      <div style={styles.background}>
        <h1>Placeholder</h1>
      </div>
    </div>
  );
}
