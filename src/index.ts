// import svgtojsx from 'svg-to-jsx';
import { PluginTransformResults, PluginTransformer } from './declarations';
import * as util from './util';

export function inlineSvg(): PluginTransformer {
  return {
    name: 'inlineSvg',
    transform(sourceText: string, fileName: string): Promise<PluginTransformResults> {
      if (!util.usePlugin(fileName)) {
        return null;
      }

      return new Promise<PluginTransformResults>(resolve => {
        resolve({
          id: fileName,
          code: `export default \`${sourceText}\``,
        });
      });
    }
  };
}
