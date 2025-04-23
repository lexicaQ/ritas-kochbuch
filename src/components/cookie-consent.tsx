import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, Settings, Shield } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Switch } from './ui/switch';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    setPreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    setShowBanner(false);
    setShowPreferences(false);
  };

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-cookbook-100 shadow-lg"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Cookie className="h-6 w-6 text-cookbook-700" />
                <p className="text-sm text-cookbook-800">
                  Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="whitespace-nowrap">
                      <Settings className="w-4 h-4 mr-2" />
                      Einstellungen
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-white">
                    <DialogHeader>
                      <DialogTitle className="text-cookbook-800 text-xl">Cookie-Einstellungen</DialogTitle>
                      <DialogDescription className="text-cookbook-600">
                        Passen Sie Ihre Cookie-Präferenzen an Ihre Bedürfnisse an.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6 py-6">
                      <div className="flex items-center justify-between space-x-4">
                        <div className="space-y-1">
                          <div className="font-medium text-cookbook-800">Notwendige Cookies</div>
                          <div className="text-sm text-cookbook-600">
                            Erforderlich für grundlegende Funktionen
                          </div>
                        </div>
                        <Switch checked disabled className="data-[state=checked]:bg-cookbook-700" />
                      </div>
                      <div className="flex items-center justify-between space-x-4">
                        <div className="space-y-1">
                          <div className="font-medium text-cookbook-800">Analytics Cookies</div>
                          <div className="text-sm text-cookbook-600">
                            Helfen uns, die Website zu verbessern
                          </div>
                        </div>
                        <Switch
                          checked={preferences.analytics}
                          onCheckedChange={(checked) =>
                            setPreferences({ ...preferences, analytics: checked })
                          }
                          className="data-[state=checked]:bg-cookbook-700"
                        />
                      </div>
                      <div className="flex items-center justify-between space-x-4">
                        <div className="space-y-1">
                          <div className="font-medium text-cookbook-800">Marketing Cookies</div>
                          <div className="text-sm text-cookbook-600">
                            Für personalisierte Werbung
                          </div>
                        </div>
                        <Switch
                          checked={preferences.marketing}
                          onCheckedChange={(checked) =>
                            setPreferences({ ...preferences, marketing: checked })
                          }
                          className="data-[state=checked]:bg-cookbook-700"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-3">
                      <Button variant="outline" onClick={() => setShowPreferences(false)}>
                        Abbrechen
                      </Button>
                      <Button 
                        onClick={() => savePreferences(preferences)}
                        className="bg-cookbook-700 text-white hover:bg-cookbook-800"
                      >
                        Speichern
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button onClick={acceptAll} className="bg-cookbook-700 text-white hover:bg-cookbook-800 whitespace-nowrap">
                  <Shield className="w-4 h-4 mr-2" />
                  Alle akzeptieren
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
