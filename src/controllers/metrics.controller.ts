import { Body, Post, Route, Tags } from 'tsoa';
import { ICharacteristicsConfig } from '../interface';
import { Characteristics } from '../models/Characteristics';
import { GetKPIs } from '../GHAFilesAndCharacteristics/GetKPIs';


@Route("metrics")
@Tags("Metrics")
export default class MetricsController {

  @Post("/")
  public async getMetrics(@Body() body: ICharacteristicsConfig): Promise<Characteristics> {

    let repo: string = body.repoName;
    let workflow: string = body.workflowName;
    let loadFrom: string = body.loadFrom || "local";

    return await new GetKPIs(repo, workflow).getKPIs(loadFrom);

  }
}
