import { render, screen, fireEvent, wait } from '@testing-library/react';
import Footer from '../components/Footer';
import SubscriptionForm from '../components/SubscriptionForm';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('<Footer />', () => {
  test('Subscription field', () => {
    render(<Footer />);

    const subElement = screen.getByTestId('subscription');
    expect(subElement).toBeInTheDocument();
    expect(subElement).toHaveAttribute('type', 'email');
    const subElementButton = screen.getByTestId('subscriptionButton');
    expect(subElementButton).toBeInTheDocument();
  });
});

describe('Pass valid email to email input field', () => {
  test('subscription field', async () => {
    render(<SubscriptionForm />);

    await wait(() => {
      fireEvent.change(screen.getByTestId('subscription'), {
        target: { value: 'test@test' },
      });
      fireEvent.click(screen.getByTestId('subscriptionButton'));
    });

    expect(screen.getByText('Please add an valid email')).toBeInTheDocument();

    await wait(() => {
      fireEvent.change(screen.getByTestId('subscription'), {
        target: { value: 'test@test.tr' },
      });
      fireEvent.click(screen.getByTestId('subscriptionButton'));
    });

    expect(() => screen.getByText('Please add an valid email')).toThrow(
      'Unable to find an element'
    );
    expect(() => screen.getByText('Required')).toThrow(
      'Unable to find an element'
    );
  });

  test('Links in the Footer', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );

    expect(screen.getByText('Items')).toHaveAttribute('href', '/items');
    expect(screen.getByText('Donators')).toHaveAttribute('href', '/donators');
    expect(screen.getByText('Pricing')).toHaveAttribute('href', '/pricing');
    expect(screen.getByText('About Us')).toHaveAttribute('href', '/about-us');
    expect(screen.getByText('QA')).toHaveAttribute('href', '/qa');

    expect(screen.getByText('Kutay Ka??an ??zen')).toHaveAttribute('href', 'https://github.com/Iseluin');
    expect(screen.getByText('Abuobaida Abdi')).toHaveAttribute('href', 'https://github.com/androidmini9x');
    expect(screen.getByText('G??ksu Alkan')).toHaveAttribute('href', 'https://github.com/goksu1');
    expect(screen.getByText('Mustafa Durmaz')).toHaveAttribute('href', 'https://github.com/mustafadurmaz');
    expect(screen.getByText('Khadija Hawa')).toHaveAttribute('href', 'https://github.com/khadijahawa');
    expect(screen.getByText('??ebnem G??rm????')).toHaveAttribute('href', 'https://github.com/sebnemgormus');

  });
});
