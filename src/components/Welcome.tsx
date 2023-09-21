import Button from './Button';

function Welcome() {
  return (
    <>
      <div className='d-flex align-items-center py-4 bg-body-tertiary'>
        <main className='form-signin w-100 m-auto'>
          <form action=''>
            <h1 className='h3 mb-3 fw-normal'>Some text for form headline</h1>
            <div className='form-floating'>
              <input
                type='email'
                className='form-control'
                id='floatingInput'
                placeholder='name@example.com'
              />
              <label htmlFor='floatingInput'>Email address</label>
            </div>
            <div className='form-floating'>
              <input
                type='password'
                className='form-control'
                id='floatingPassword'
                placeholder='Password'
              />
              <label htmlFor='floatingPassword'>Password</label>
            </div>
            <div className='form-check text-start my-3'>
              <input
                className='form-check-input'
                type='checkbox'
                value='remember-me'
                id='flexCheckDefault'
              />
              <label className='form-check-label'>Remember me</label>
            </div>
            <div className='center'>
              <Button type='btn-primary w-100 py-2' text='Sign in' />
            </div>
          </form>
        </main>
      </div>
    </>
  );
}

export default Welcome;
