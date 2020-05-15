import React from 'react'

export function Home() {
  return (
    <div>
      <h1>The Sod Farm</h1>
      <p>Fresh cut sod from our farms to your home!</p>
      <p>Open 7 days a week!</p>
      <ul>
        <li>
          <a href="https://get.asp.net/">ASP.NET Core</a> and{' '}
          <a href="https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx">
            C#
          </a>{' '}
          for cross-platform server-side code
        </li>
        <li>
          <a href="https://facebook.github.io/react/">React</a> for client-side
          code
        </li>
        <li>
          <a href="https://www.typescriptlang.org/">Typescript</a> for better
          client-side code
        </li>
        <li>
          <a href="https://sass-lang.com/">Sass</a> for better css
        </li>
        <li>
          <a href="http://getbootstrap.com/">Bootstrap</a> for layout and
          styling
        </li>
      </ul>
      <p>To help you get started, we have also set up:</p>
      <ul>
        <li>
          <strong>Efficient production builds</strong>. In production mode,
          development-time features are disabled, and your{' '}
          <code>dotnet publish</code> configuration produces minified,
          efficiently bundled JavaScript files.
        </li>
      </ul>
    </div>
  )
}
