import { Redirect, useRootNavigationState } from 'expo-router';

export default function Index() {
  const rootNavigationState = useRootNavigationState();
  if (!rootNavigationState?.key) return;

  return <Redirect href="/Home" />;
}
