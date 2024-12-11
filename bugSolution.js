This solution uses a combination of `Linking.addEventListener` and `Linking.getInitialURL` to ensure that deep links are handled reliably, even if the event listener fails to fire immediately.  Upon mounting the component, it first attempts to get the initial URL, then adds a listener to catch subsequent deep links.

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [deepLink, setDeepLink] = useState(null);

  useEffect(() => {
    const handleDeepLink = async (event) => {
      setDeepLink(event.url);
    };

    const getInitialUrl = async () => {
      const initialUrl = await Linking.getInitialURL();
      if (initialUrl) {
        setDeepLink(initialUrl);
      }
    };

    getInitialUrl();

    Linking.addEventListener('url', handleDeepLink);

    return () => {
      Linking.removeEventListener('url', handleDeepLink);
    };
  }, []);

  return (
    <View>
      {deepLink && <Text>Deep Link: {deepLink}</Text>}
    </View>
  );
};

export default App;
```